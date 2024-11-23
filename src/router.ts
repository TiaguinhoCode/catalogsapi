// Servidor
import { Router, Request, Response } from "express";

// Controller
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/detailUserController";
import { ListUsersController } from "./controllers/user/listUsersController";
import { UserDeleteController } from "./controllers/user/userDeleteController";
import { EditUserController } from "./controllers/user/editUserController";
import { CreateStatusController } from "./controllers/status/createStatusController";
import { ListStatusController } from "./controllers/status/listStatusController";
import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { ListCategoryController } from "./controllers/category/listCategoryController";
import { EditCategoryController } from "./controllers/category/editCategoryController";
import { RemoveCategoryController } from "./controllers/category/removeCategoryController";
import { CreateProductsController } from "./controllers/products/createProductsController";
import { ListProductsController } from "./controllers/products/listProductsController";
import { ListProductsIsActiveController } from "./controllers/products/listProductsIsActiveController";
import { ListProductsPerCategoryController } from "./controllers/products/ListProductsPerCategorysController";
import { CreateProductsPromotionController } from "./controllers/products/createProductsPromotionController";
import { ListProductsPromotionController } from "./controllers/products/listProductsPromotionController";
import { EditProductsContronller } from "./controllers/products/editProductsController";
import { RemoveProductsController } from "./controllers/products/removeProductsController";
import { CreateOrderController } from "./controllers/order/createOrderController";
import { ListOrderController } from "./controllers/order/listOrdersController";
import { EditOrderController } from "./controllers/order/editOrderController";
import { RemoveOrderController } from "./controllers/order/removeOrderController";
import { CreateItemsController } from "./controllers/items/createItemsController";
import { DetailOrderController } from "./controllers/order/detailOrderController";
import { RemoveItemsController } from "./controllers/items/removeItemsController";
import { DetailItemController } from "./controllers/items/DetailItemsController";
import { EditItemsControllers } from "./controllers/items/editItemsControllers.";
import { CreateBaannerController } from "./controllers/banner/createBannerController";
import { ListBannerController } from "./controllers/banner/listBannersController";
import { EditBannerController } from "./controllers/banner/editBannerController";
import { RemoveBannerController } from "./controllers/banner/removeBannerController";
import {  UploadController } from "./controllers/upload";

// Middlewares
import { isAuthenticated } from "./middlewares/auth/isAutheticated";
import { isAdmin } from "./middlewares/auth/isAdmin";
import { upload } from "./middlewares/auth/upload";

// Config

// Biblioteca

// Roteamento
const router = Router();

// Rota de usuario
router.post(
  "/v1/create/user",
  isAuthenticated,
  isAdmin,
  new CreateUserController().handle
);
router.post("/v1/session", new AuthUserController().handle);
router.get("/v1/me", isAuthenticated, new DetailUserController().handle);
router.get(
  "/v1/users",
  isAuthenticated,
  isAdmin,
  new ListUsersController().handle
);
router.delete(
  "/v1/user",
  isAuthenticated,
  isAdmin,
  new UserDeleteController().handle
);
router.put("/v1/user", isAuthenticated, new EditUserController().handle);

// Rotas de Status
router.post(
  "/v1/status",
  isAuthenticated,
  isAdmin,
  new CreateStatusController().handle
);
router.get("/v1/status", new ListStatusController().handle);

// Rota de Teste
router.get("/v1/test", (req: Request, res: Response) => {
  res.status(201).json({
    servidor: "hello word!",
  });
});

// Rota de Categoria
router.post(
  "/v1/category",
  isAuthenticated,
  isAdmin,
  new CreateCategoryController().handle
);
router.get("/v1/category", new ListCategoryController().handle);
router.put(
  "/v1/category",
  isAuthenticated,
  isAdmin,
  new EditCategoryController().handle
);
router.delete(
  "/v1/category",
  isAuthenticated,
  isAdmin,
  new RemoveCategoryController().handle
);

// Banner
router.post(
  "/v1/banner",
  isAuthenticated,
  isAdmin,
  new CreateBaannerController().handle
);
router.get(
  "/v1/banner",
  isAuthenticated,
  isAdmin,
  new ListBannerController().handle
);
router.put(
  "/v1/banner",
  isAuthenticated,
  isAdmin,
  new EditBannerController().handle
);
router.delete(
  "/v1/banner",
  isAuthenticated,
  isAdmin,
  new RemoveBannerController().handle
);

// Produtos
router.post(
  "/v1/products",
  isAuthenticated,
  isAdmin,
  new CreateProductsController().handle
);
router.put(
  "/v1/products",
  isAuthenticated,
  isAdmin,
  new EditProductsContronller().handle
);
router.put(
  "/v1/products/promotion",
  isAuthenticated,
  isAdmin,
  new CreateProductsPromotionController().handle
);
router.get("/v1/products", new ListProductsController().handle);
router.get("/v1/products/active", new ListProductsIsActiveController().handle);
router.get(
  "/v1/products/category",
  new ListProductsPerCategoryController().handle
);
router.get(
  "/v1/products/promotions",
  new ListProductsPromotionController().handle
);
router.delete(
  "/v1/products",
  isAuthenticated,
  isAdmin,
  new RemoveProductsController().handle
);

// Order
router.post("/v1/order", new CreateOrderController().handle);
router.get("/v1/order", isAuthenticated, new ListOrderController().handle);
router.get("/v1/order/detail", new DetailOrderController().handle);
router.put("/v1/order", new EditOrderController().handle);
router.delete("/v1/order", new RemoveOrderController().handle);

// Item
router.get("/v1/items", new DetailItemController().handle);
router.post("/v1/items", new CreateItemsController().handle);
router.put("/v1/items", new EditItemsControllers().handle);
router.delete("/v1/items", new RemoveItemsController().handle);

// Upload
router.post("/v1/upload", upload.single("file"), new UploadController().handle);

export { router };
