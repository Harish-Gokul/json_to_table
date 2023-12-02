function generate_year_title(years) {
  table_containter.innerHTML = "";
  let row_div = document.createElement("div");
  row_div.className = "row";

  years.forEach((element) => {
    let year_div_title = document.createElement("div");
    year_div_title.classList = "year_heading";
    year_div_title.innerHTML = element;

    row_div.appendChild(year_div_title);
  });

  table_containter.appendChild(row_div);
}

function generate_rows(data) {
  data.forEach((tool) => {
    let div_row = document.createElement("div");
    div_row.className = "row";

    years.forEach((year) => {
      let year_div = document.createElement("div");
      year_div.className = "year";

      let year_image_obj = tool.years.find((each_obj) => {
        return each_obj.year == year;
      });
      if (year_image_obj) {
        let img_tag = document.createElement("img");
        img_tag.src = year_image_obj.image_url;
        img_tag.className = "image";

        year_div.appendChild(img_tag);
      } else {
        year_div.innerText = "Not found";
      }

      div_row.appendChild(year_div);
    });

    let title_div = document.createElement("div");
    title_div.className = "title";
    title_div.innerText = tool.tool_name;
    div_row.appendChild(title_div);
    console.log(title_div);

    table_containter.appendChild(div_row);
  });
}

function scroll_table_to_right() {
  table_containter.scroll(table_containter.offsetWidth, 0);
}
