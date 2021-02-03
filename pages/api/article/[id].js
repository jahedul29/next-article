import { articles } from "../../../fakedata/articles";

export default function handler(req, res) {
  const filtered = articles.filter(
    (article) => article.id === parseInt(req.query.id)
  );
  console.log("filtered", filtered);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with id ${req.query.id} does not exist` });
  }
}
