import { useState, useEffect } from "react";
import Color from "./Color";

const API = import.meta.env.VITE_API_URL;

function Colors() {
  const [colors, setColors] = useState([]);

  const fetchData = async () => {
    try {
      fetch(`${API}/colors`)
        .then((r) => r.json())
        .then((res) => setColors(res));
    } catch (err) {
      return err;
    }
  };
// GET all colors
  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className="Colors">
      <section>
        <table>
          <thead>
            <tr>
              <th>Favorite</th>
              <th>See this color</th>
              <th>Swatch</th>
            </tr>
          </thead>
          <tbody>
            {colors.map((color) => {
              return <Color key={color.id} color={color} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Colors;
