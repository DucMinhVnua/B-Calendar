import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/client";

const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const signIn = async () => {
        const auth = getAuth(app);
        return await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);

                if (!credential) return;

                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                return {
                    token,
                    user,
                };
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...

                console.log("error: ", {
                    errorCode,
                    errorMessage,
                    email,
                    credential,
                });
            });
    };

    const getUsers = async () => {
        const res = await fetch("/api/users");

        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }

        return await res.json();
    };

    return {
        signIn,
        getUsers,
    };
};

export default useFirebase;
