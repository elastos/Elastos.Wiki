---
title: Files Service
---

Hive SDK uploads files to the corresponding Vault through the FilesService class. File is one of the data types supported by Hive SDK. The FileService class is one of the derived sub-services in Vault Service, which is used to support the operation of file types, such as uploading, downloading, and deleting. Once the data is uploaded to Hive Node, its file block data is hosted and saved in the corresponding IPFS Node, while its metadata information is hosted in the Vault internal database.

## Upload File

### Upload File Data by Writing File Stream Interface Writer

When uploading a file, you need to get the FilesService interface instance from the Vault instance, and then set the target path (REMOTE_FILE_PATH) to get the remote write file stream interface instance Writer. At the same time, you'll need to write the file content into the file stream. The process of writing file data is that of uploading file data.

The whole process of uploading files using FileService instance is connected in series through the CompletableFuture mode, and a CompletableFuture object is returned that indicates whether the file upload succeeds or fails and an exception occurs.

An example of uploading files by using the write file stream interface is as follows:

```js
let vault = try Vault(appContext, providerAddress)
let filesService = try vault.filesService
filesService.getUploadWriter(YOUR_REMOTE_PATH)
.then { fileWriter in
   return try fileWriter.write(data: REMOTE_FILE_CONTENT_DATA)
}
.done { success in
   print("Upload the file by writer successfully")
}
.catch { error in
	print("Failed to upload a file.")
   print(error)
}
```

## Download File

Similar to uploading files, when downloading them you can get the Reader or InputStream instance through the FileSerice instance, and then download the file data in the Vault based on the Reader instance or InputStream instance.

```js
filesService.getDownloadReader(YOUR_REMOTE_PATH)
.then { fileReader in
   return fileReader.read(localCachePath)
}
.done { result in
   print("Download the file by input stream successfully")
}
.catch { error in
	print("Failed to download the file by input stream")
   print(error)
}
```

## List Files

List the files in the file directory. FileInfo is single file information, and path is the file directory:

```js
filesService!.list(YOUR_REMOTE_PATH)
.done { list in
   print("List folder files successfully.")
   list.forEach { info in
     print("file name => \(info.updated)")
     print("file size => \(info.size)")
     }
}
.catch { error in
	print("Failed to list folder files")
   print(error)
}
```

## Stat

Retrieve the information of a single file:

```js
filesService!.stat(YOUR_REMOTE_PATH)
.done { fileInfo in
   print("get the state of the file successfully.")
   print("file name => \(fileInfo.name)")
   print("file size => \(fileInfo.size)")
}
.catch { error in
   print(error)
}
```

## Move

Move a single file from source to target:

```js
filesService!.move(YOUR_REMOTE_PATH, YOUR_REMOTE_NEW_PATH)
.done { success in
   print("Moved the file to new path in success.")
}
.catch { error in
   print("Failed to move the file")
   print(error)
}
```

## Delete

Delete the file; the file is in the path:

```js
filesService!.delete(YOUR_REMOTE_PATH)
.done { success in
   print("Delete the file successfully")
}
.catch { error in
   print("Failed to delete of the file")
   print(error)
}
```
