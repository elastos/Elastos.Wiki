---
title: Write
---

The following code is an example of how a dApp could store some files to a users Hive vault courtesy of [ela.city](https://ela.city/).

```ts
import {
  promiseAllStepN,
  Waitable,
  Waiter,
  CollectionOf,
  uid,
} from "@elacity-js/lib";
import { FileInfo } from "@elastosfoundation/hive-js-sdk";
import { IUploadResult } from "../../nfts/types";
import { BrowserConnectivitySDKHiveAuthHelper } from "./hive.auth.helper";
import { resolverURLs } from "../connector";
import { APP_DID } from "../constants";

interface FileQuery {
  offset?: number;
  limit?: number;
  reverse?: boolean;
  path?: string;
}

interface HiveFileResponse {
  url?: string;
  path?: string;
  content?: Uint8Array;
}

export class HiveFileHelper extends BrowserConnectivitySDKHiveAuthHelper {
  /**
   * Upload a file as NFT
   *
   * @param userDid
   * @param formData
   * @returns
   */
  static async uploadNFTByUser(
    userDid: string,
    formData: FormData
  ): Promise<IUploadResult> {
    const helper = new HiveFileHelper(resolverURLs[20], APP_DID);
    const fileService = (
      await helper.getVaultServices(userDid)
    ).getFilesService();

    const subFolder = uid();

    const metadataJson: Record<string, any> = Array.from(formData).reduce(
      (r: Record<string, any>, [key, value]: [string, any]) => ({
        ...r,
        ...(key !== "image" && {
          [key]: value,
        }),
      }),
      {}
    );

    const imageHash = `nfts/elacity/${subFolder}/media.raw`;
    await fileService.upload(
      imageHash,
      Buffer.from(formData.get("image").toString().split(",").pop(), "base64")
    );

    const jsonHash = `nfts/elacity/${subFolder}/metadata.json`;
    await fileService.upload(
      jsonHash,
      Buffer.from(
        JSON.stringify({ ...metadataJson, image: imageHash, uid: subFolder })
      )
    );

    return { data: { jsonHash, imageHash }, status: "success" };
  }

  static async uploadFileToUserVault(
    userDid: string,
    file: Blob,
    path?: string
  ): Promise<HiveFileResponse> {
    console.log("uploadFileToUserVault", { userDid, file });
    const helper = new HiveFileHelper(resolverURLs[20], APP_DID);
    const fileService = (
      await helper.getVaultServices(userDid)
    ).getFilesService();

    const fileName = uid();
    const imagePath = `${path || "elacity/ai"}/${fileName}`;
    const buffer = await file.arrayBuffer();
    await fileService.upload(imagePath, Buffer.from(buffer));

    return {
      path: imagePath,
      content: new Uint8Array(buffer),
    };
  }

  static async uploadByURLToUserVault(
    userDid: string,
    url: string,
    path?: string
  ): Promise<HiveFileResponse> {
    const response = await fetch(url, { method: "GET" });

    return HiveFileHelper.uploadFileToUserVault(
      userDid,
      await response.blob(),
      path
    );
  }

  static async listAssets(
    userDid: string,
    path?: string
  ): Promise<HiveFileResponse[]> {
    const helper = new HiveFileHelper(resolverURLs[20], APP_DID);
    const fileService = (
      await helper.getVaultServices(userDid)
    ).getFilesService();

    const files: FileInfo[] = await fileService.list(path || "elacity/ai");

    return promiseAllStepN(
      20,
      files.map((file) => async () => {
        const content: Uint8Array = await fileService.download(file.getName());
        return {
          url: URL.createObjectURL(
            new Blob([content.buffer], { type: "image/png" })
          ),
          path: file.getName(),
          content,
        };
      })
    );
  }

  static fetchAssets(
    userDid: string,
    { offset = 0, limit = Infinity, path, reverse }: FileQuery
  ): Waitable<CollectionOf<HiveFileResponse>> {
    return new Waitable(async (w: Waiter<CollectionOf<HiveFileResponse>>) => {
      const helper = new HiveFileHelper(resolverURLs[20], APP_DID);
      const fileService = (
        await helper.getVaultServices(userDid)
      ).getFilesService();

      let files: FileInfo[] = await fileService.list(path || "elacity/ai");
      w.emit("count", files.length);

      const result = {
        total: files.length,
        offset: offset || 0,
        limit: limit || Infinity,
      };

      if (files.length === 0) {
        w.emit("result", {
          ...result,
          items: [],
          isLast: true,
        });

        return {
          ...result,
          isLast: true,
          items: [],
        };
      }

      if (reverse) {
        files = files.reverse();
      }

      const items = (await promiseAllStepN)<HiveFileResponse>(
        10,
        files.slice(offset, offset + limit).map((file, index) => async () => {
          const content: Uint8Array = await fileService.download(
            file.getName()
          );
          const response = {
            url: URL.createObjectURL(
              new Blob([content.buffer], { type: "image/png" })
            ),
            path: file.getName(),
            content,
          };

          w.emit("file", { ...response, index });

          return response;
        })
      );

      w.emit("result", {
        ...result,
        items,
        isLast: files.length === offset + items.length,
      });

      return {
        ...result,
        items,
        isLast: files.length === offset + items.length,
      };
    });
  }

  static async removeFile(userDid: string, fullpath?: string): Promise<void> {
    console.log("removeFile", { userDid, fullpath });
    const helper = new HiveFileHelper(resolverURLs[20], APP_DID);
    const fileService = (
      await helper.getVaultServices(userDid)
    ).getFilesService();

    return fileService.delete(fullpath);
  }
}
```

:::info
A full Hive sample application built using Angular & Ionic is available at https://github.com/elastos/Elastos.Hive.JS.SDK/tree/master/samples/ionic.
:::
