const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const categoriesData = await Category.findAll({
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const categoriesData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Product }],
    });

    if (!categoriesData) {
      res.status(404).json({ message: "No categories found with that id!" });
      return;
    }

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoriesData = await Category.create(req.body);
    res.status(201).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoriesData = await Category.findByPk(req.params.id);
    if (!categoriesData) {
      res.status(404).json({ message: "No categories found with that id!" });
      return;
    }
    await categoriesData.update(req.body);
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoriesData = await Category.findByPk(req.params.id);
    if (!categoriesData) {
      res.status(404).json({ message: "No categories found with that id!" });
      return;
    }
    await categoriesData.destroy();
    res.status(204).json({ message: "Category removed!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
