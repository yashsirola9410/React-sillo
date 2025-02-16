// Config files store settings that control how an app works without changing the code. They help by:

// Keeping code clean (separating settings from logic).
// Easily changing app behavior (like switching from development to production).
// Managing sensitive data (like API keys in .env files).
// Avoiding hardcoded values (making updates easier).

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), // this is the format for the vite "import.meta.env.nameof the"
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf