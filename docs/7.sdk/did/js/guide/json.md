---
title: JSON Web Token
---

## Create JWT

JWT content is compiled by JWTBuilder, which is divided into two parts: JWTHeader and Claims, which are filled separately. Finally, JWT or JWS Token String is obtained according to whether they are encapsulated and signed or not.

#### Example

```ts
//create jwt header
let h = JWTBuilder.createHeader();
h.setType(JWTHeader.JWT_TYPE).setContentType("json");
h.put("library", "Elastos DID");
h.put("version", "1.0");

let cal = dayjs();
let iat = cal.unix();
let nbf = cal.add(-1, "month").unix();
let exp = cal.add(4, "month").unix();

//create jwt claims
let b = JWTBuilder.createClaims();
b.setSubject("JwtTest")
  .setId("0")
  .setAudience("Test cases")
  .setIssuedAt(iat)
  .setExpiration(exp)
  .setNotBefore(nbf)
  .put("foo", "bar");

//get jwt token
let token = doc.jwtBuilder().setHeader(h).setClaims(b).compact();

if (token) console.log("create jwt token successfully.");
else console.log("create jwt token failed.");
```

#### Usage

```ts
public jwtBuilder(): JWTBuilder；
```

For better understanding, this method is introduced in the JWT module. The DID document offers a method to create JWTBuilder and get the compiled mode of JWT.

```ts
public static createHeader(): JWTHeader；
```

This method creates an empty JWTHeader, and the API document can be referred to for adding elements.

```ts
public static createClaims(): Claims；
```

This method creates empty claims, and the API document can be referred to for adding elements.

```ts
public setHeader(header: JWTHeader): JWTBuilder；
```

This method fills header into JWTBuilder.

```ts
public setClaims(claims: Claims): JWTBuilder；
```

This method fills claims into JWTBuilder.

```ts
public async sign(
	password: string,
	keyid: string = null // the authentication key in the DID document that creates JWTBuilder
): Promise<string>；
```

This method signs the content of JWTBuilder and generates JWT string.

```ts
public compact(): string；
```

This method encapsulates the content in JWTBuilder and generates JWT string.

## Verify and Use JWT

The SDK provides a method to analyze the type of JWToken (JWT/JWS). If JWS does the corresponding post-verification parsing, both JWT and JWS token string will convert JWT.

JWT provides a multitude of methods to obtain JWT elements for the usage and reference of users.

#### Example

```ts
let jpb = doc.jwtParserBuilder();
let jp = jpb.requireSubject(doc.getSubject()).build();
let jwt =  await jp.parse(token);
expect(jwt).not.toBeNull();
h = jwt.getHeader();
//get each elem of head
console.log("get header type: {}", h.getType());
... ... ... ...
//get each elem of body
let c = jwt.getBody();
console.log("get issuer: {}", c.getIssuer());
... ... ... ...
```

#### Usage

```ts
public jwtParserBuilder(): JWTParserBuilder;
```

This method is provided by the DID document to obtain the JWTParserBuilder object. JWTParserBuilder enables users to set the filter options to check whether the token meets the requirements or not. The interfaces include requireSubject, requireAudience, requireIssuer, requireIssuedAt, requireAlgorithms, requireHeaderType, and setAllowedClockSkewSeconds. Refer to the API document for specifics.

```ts
public build(): JWTParser;
```

This method is provided by JWTParserBuilder to encapsulate JWTParser.

```ts
public async parse(token: string): Promise<JWT>；
```

This method is provided by JWTParser to parse the token. If succeeds, return JWT object; otherwise, an error is returned.

```ts
public getHeader(): JWTHeader；
```

This method is offered by JWT to get the content of JWT header.

```ts
public getBody(): Claims；
```

This method is provided by JWT to get the content of JWT header body.
