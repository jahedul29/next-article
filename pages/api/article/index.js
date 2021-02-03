import { articles } from "../../../fakedata/articles";

export default function handler(req, res) {
  res.status(200).json(articles);
}
