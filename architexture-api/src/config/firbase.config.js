const firebase = require('firebase-admin');

const firebaseConfig = {
    "type": "service_account",
    "project_id": "architecture-chiles",
    "private_key_id": "57898126566a261a86113426f1e78017fc85215d",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCw1kOOru1OLMpC\nkkTyaVgNv9pkOJ7Was13qt+uNqkIpLHhDkaPqD6RZ+oXBTkxQ8RbXfyEIZ8B6zCb\nnj9AYR5QSpt5GScc2viidlZuXwXE6PfbTWMNt/HFYOR2cagqGj/kZRD8qM9mS88K\nUjvOpEfFpIvaT5MJVQ9awh/9mmKXgSs6ENo5ppbuA+NEvR3g7cjMxDqFxH42y5XP\n+jjbXJVC7M5AjAJZIwDVpwQLxQxL2zvgmkebLfNQ1wxNLYH+iYUjJCDlwzDblkTU\neroKERQczpQkb/oLKKeXSh6AmP4wH7M+u/a8H3UXgFiXhJwbh5rCcx+ahVbnPRbV\nMhbpINzrAgMBAAECggEAGfYFdQJj/wC/BjGdwvje3yXgqgCl+6ndAEnVt33O0wta\nvJpGlvsxiadNIT64ZsMhe0hmX1TlmHfZav87H03NZXw5LE4aWozLHmQWdvL8UIGN\n4bmQETOFYF9ugEpZ+ym0t5Me1fjyedInUxyU1dbIXVEK4cH3lCcorz+l8qqiTsYo\n4NzrSiohGOacw3euaoBMu4XKtrgnPtzKDl7UTVOhw09hGzUnaZmZRxc8FvPCfux2\nYdRfkWXglcdG35rZLvb7goh9jMQGNMDcCbBZuDXSpsINfIL+BbJKm0dQvaxsEsr3\nbGN1Qy8DPPgIIYOubKkpHeWzeGaPR640wNvmkxjCAQKBgQDwinqi3HbLItgto7M+\nRfqBHdr3/3DpYlBWscAwCWo3m/W/2wOfwfuqTLxPrg5U2fiSF4SVMloCh1fnpQ0J\nNhd6Fy71Twho5HbnEnWXNzVtCNzBw16STdjF0HBmvNP1cfERQoOpqmL+6qibNbAN\n9WcnKTGw2gY5rhv9QB2ts0L+VwKBgQC8M7CSR51VFDCGiBYrU1JOmx5zbvo785f1\nUDmt9cetE8b5ZYISTecemuzj8/9Db4AuOuRGsMWOIrBVAXt77XqQC0ib+yhlY+tD\n7xnDhK30FRi7tldebSBVx4JEZ1Jl2s1L75WhwLxKbtA5lJo7sSK10sJju9SfHWHn\ng5uXpAERjQKBgDzk4bz/EPfF/3I2Yfce4hbzxu5HdX8vy2TXJO9EQuaHDgSe3mEA\nS8TGHloRl0E12S6q036tu4muV7ul1hIB5pma6uFhO6DKTaubybcZW+YZe0F2QyfI\nm1sgtIPdw878JGoZK5m1L9CW+U4pnkM6X/3S+OhrmW3avO004Q6LNieLAoGBAIv5\nid8SIoNPs9OrTYnFu9a46koChVynjSKoG241+d/RcNC23aoNhNMvePcF15npSRWZ\nOYUWHqjbRfjDVHtUoi6WJdfVUjMuwKFTKP9RJCwAsNeUA6E4Wq9R5qJHknIs7ToI\nJGsctS5LAtWAn8G7ukwvR+LzpWz+Zn3RVZzQHvdVAoGAOQ6P/Nx0BviTKyBlx8f8\nxqH8dtMUpicVOOEXOIwl3y2f2Did3pNKyz5nz8O8F+pHTdB4jl5GCeRZkrpoTULZ\nkNE0aoILn9J/vbbRIAv88rf2hox/NV1/zCAXoHD0qk/3/tO3Gllhnw2W+duHJZuO\nTBG4WAfyqo+W6VZ9dpiaamQ=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-mmotf@architecture-chiles.iam.gserviceaccount.com",
    "client_id": "113347988793735302466",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mmotf%40architecture-chiles.iam.gserviceaccount.com"
}

firebase.initializeApp({
    credential: admin.credential.cert(firebaseConfig)
})

module.exports = firebase;
