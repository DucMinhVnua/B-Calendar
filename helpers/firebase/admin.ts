import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const app =
    getApps().length === 0
        ? initializeApp({
              credential: cert({
                  projectId: "b-calendar-21955",
                  clientEmail: "firebase-adminsdk-fbsvc@b-calendar-21955.iam.gserviceaccount.com",
                  privateKey:
                      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC8c2bQIFO9iGpb\nYShrEQRQzGtb/gmH4zApSN18VECwn1k5TImkfzqoqBBTorEbJ6heHqplrawS1N5O\nUFiADFLoz8HCgKBovxUr7Mwdn4BBey7Tv6fBjHzeaeef//Zk55F7uGGqdgsupJrw\nJPZe57tw5wryGZUiw1rpkk2peuq90kg95roThsfzpbxIBtklLa8RFgCZ9JSNM+Yr\nhX1Q3BvIdUzpPKchQDy7yZ11U7dYl8vT4OlxOr2lct0VJV8X1AVVaKVLxPKULTLr\nXhVPWX0jBH+DODPcMaDfte+aUuCX3gU9zJwzINIl/ZT47OWzF+zUDSa0V7ohsRjW\n8h0qDw+tAgMBAAECggEABRrOJ+icRBfQI7oJxX6wQn0LEnKa8PyhNxkTcNT6bJ5g\nZRoy50sP/HYS/ST8zarBF42WmYr/DIKKJA5um0daLpbEHZ/s2HGGogo3zDygFYX/\n8nnwUiCbWE3/mXiuRLT2HqcTtDGe42xPix5BMzhtPiVwCTdSsB6hFY8iPetHtQ0T\nbs5KAbMEb04VvNi0/cUFeDnx+FifNAShu3Y9zyS58lWJABayBQJpG9DhbXr16NLs\nlEqk8SfdWwBXt5YiJMgPieAzcOtyK2cNXUHJG7Ovz94XmEpZIlntGz5jeUATpbzN\nxVmHqWorScsP0NwEozIyNLcWwFdjB0h2PaPaNcB9AQKBgQD3NUXp9YvTMD4GdJQ9\nRV7HHqizp2ZTHgw10ivzM3DauCCUP9LePPEEsOKKX54NR2ocdsszdosFVIpdLfy9\ni8BtiX7PDFOdBFANuSNxUAeWFbjNFIfVGuleN7uwZf3HGP1nNFN+yQNRU3+3Wjkr\nr9vktyoTJyPEEKyw4RdxaGbDAQKBgQDDJyrqlJXilUG0wRsHGBUZchjEobcqqmk6\n4Wk4Abn6JGoD9HrSRYy9y9CB4/BfJcmoH0v4ahzYdQDERDFJRRkifrFxblyXhYVu\nHo88fviQxgAH5AtEKA5Cjz9A827Rot0VRb5U58c9RIHjQVptltD5PIiXsINmoUu2\nSPmWpsVIrQKBgDnYHlbjXOd6x1itWK6Jl+bR1rnK9teGFWdWmXAb3lFfekgWMxpL\nej4VwbyNKSeESWEFrwCIwXjq0kGBbD1SASHgZWq/QKViB/VeF9wA1PWaeZaLMkl8\nNZUVR3a8NsiqoUjP5qWpFXynJCBcHTqKuNJoxZCbvPO4zx/IW7ruqfUBAoGAOnQK\n6MSkuH+YdLm6jL9r4nlIbe06Xe85IcfOqlXqDMDHeHPMLhti8p6Pz7gkkXtSEad+\nK+Qsy7EQD7mVQasOwkRMhftWhJQbyUYiBS7K6SJFdBecQEf3LXyWp6/Cq8wqiGqh\nffEGvpU8ioNSwKyB34WALF9UnHMHqIvnJnbBdOkCgYBTJ/ALY+nu9lI1l6AzTRLB\nD4HwZdxvlB7QZxw8oWQ8J9iNNTg3pKvR09Q9+YnzAzyLvvURu1RcsArwWvz9rVFb\nBp743mJI8nMhcQvZqJepaqDHPV+NvYh1+h5rHRWkuVZglJFoyUDp9nK5T2gqH6HR\nZEh+5lUUzZAKNX2miAZN6A==\n-----END PRIVATE KEY-----\n".replace(
                          /\\n/g,
                          "\n",
                      ),
              }),
          })
        : getApps()[0];

export const adminAuth = getAuth(app);
