(async () => {
    const { db, connection } = await DatabaseConfig();
    const { app } = Application();
    const port = process.env.PORT || 3000;
    app.listen(port);
})();