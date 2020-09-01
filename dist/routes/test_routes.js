"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoutes2 = void 0;
class TestRoutes2 {
    route(app) {
        app.get('/api/test', (req, res) => {
            res.status(200).json({ message: "Get request successfull" });
        });
        app.post('/api/test', (req, res) => {
            res.status(200).json({ message: "Post request successfull" });
        });
    }
}
exports.TestRoutes2 = TestRoutes2;
