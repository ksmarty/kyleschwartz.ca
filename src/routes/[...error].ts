// Redirect all paths to root

export const GET = async () => ({
    headers: { Location: "/" },
    status: 302,
});
