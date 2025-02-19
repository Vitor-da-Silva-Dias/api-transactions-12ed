import { Request, Response, Router } from "express";
import { TransactionController } from "../controllers/transaction.controller";
import { UserMiddleware } from "../../user/validators/user.middleware";
import { TransactionMiddleware } from "../validators/transaction.middleware";

export const transactionRoutes = () => {
    const app = Router({
        mergeParams: true,
    });

    const controller = new TransactionController();

    app.get("/", [UserMiddleware.validateUserExists], (req: Request, res: Response) => controller.list(req, res));
    app.get("/:id", (req: Request, res: Response) => controller.get(req, res));
    app.post("/", [TransactionMiddleware.validateFieldsCreate], controller.create);
    app.delete("/:transactionId", controller.delete);
    app.put("/:transactionId", controller.update);

    return app;
};
