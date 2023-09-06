import express from "express";
import morgan from "morgan";
import { Request, Response, NextFunction } from "express";
import { IRoutes } from "./interfaces/routes.interface";
import { errorHandler } from "./middlewares/error.middleware";

class App {
  public app: express.Application;
  public port: number;
  public env: string;

  constructor(routes: IRoutes[]) {
    this.app = express();
    this.port = 8000;
    this.env = process.env.NODE_ENV || "development";

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.connectToDatabase();
    this.initializeRoutes(routes);
    this.urlNotFound();
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App is running on http://localhost:${this.port}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(morgan("dev"));
    // this.app.use(cors({ origin: config.get('cors.origin'), credentials: config.get('cors.credentials') }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private connectToDatabase() {
    console.log("Database connected!");
  }

  private initializeRoutes(routes: IRoutes[]) {
    routes.forEach((route) => {
      this.app.use("/api", route.router);
    });
  }

  private urlNotFound() {
    this.app.use("/*", (req: Request, res: Response, next: NextFunction) => {
      next("URL not found!");
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorHandler);
  }
}

export default App;
