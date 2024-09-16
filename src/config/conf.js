/* eslint-disable no-undef */
const conf = {
    appwriteUrl: String(process.env.VITE_REACT_APP_APPWRITE_URL),
    appwriteProjectId: String(process.env.VITE_REACT_APP_PROJECT_ID),
    appwriteDatabaseId: String(process.env.VITE_REACT_APP_DATABASE_ID),
    appwriteCollectionId: String(process.env.VITE_REACT_APP_COLLECTION_ID),
    appwriteBucketId: String(process.env.VITE_REACT_APP_BUCKET_ID)
}

export default conf;