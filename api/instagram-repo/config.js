exports.DATABASE_URL = process.env.DATABASE_URL;
exports.DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
exports.DATABASE_PORT = process.env.DATABASE_PORT || 5432;
exports.DATABASE_NAME = process.env.DATABASE_NAME || "instagram_repo";
exports.DATABASE_USER = process.env.DATABASE_USER;
exports.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

// app
exports.PORT = process.env.PORT || 3006;
