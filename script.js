var data = [
  {
    tools: "Dog",
    year: 2020,
    image_url: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  },
  {
    tools: "cat",
    year: 2021,
    image_url:
      "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
  },
  {
    tools: "cat",
    year: 2020,
    image_url: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
  },

  {
    tools: "Dog",
    year: 2001,
    image_url: "https://images.dog.ceo/breeds/hound-afghan/n02088094_11584.jpg",
  },

  {
    tools: "Dog",
    year: 1999,
    image_url: "https://images.dog.ceo/breeds/hound-afghan/n02088094_11584.jpg",
  },

  {
    tools: "Dog",
    year: 2002,
    image_url: "https://images.dog.ceo/breeds/hound-afghan/n02088094_11584.jpg",
  },

  {
    tools: "Dog",
    year: 2003,
    image_url: "https://images.dog.ceo/breeds/hound-afghan/n02088094_11584.jpg",
  },

  {
    tools: "Dog",
    year: 2004,
    image_url: "https://images.dog.ceo/breeds/hound-afghan/n02088094_11584.jpg",
  },

  {
    tools: "Dog",
    year: 2005,
    image_url: "https://images.dog.ceo/breeds/hound-afghan/n02088094_11584.jpg",
  },
];

// get the distinct years
var years = [...new Set(data.map((d) => d.year))];

// sorting years in descending order
years = years.sort((a, b) => a - b);
console.log(years);
// get the distinct tools
var tools = [...new Set(data.map((d) => d.tools))];
console.log(tools);
// loop the tools and years to read the image
let refined_data = [];
tools.forEach((tool) => {
  let each_tool = { tool_name: tool, years: [] };
  years.forEach((year) => {
    var each_data = data.find((d) => d.tools == tool && d.year == year);
    if (each_data) {
      var image_url = each_data.image_url;
      each_tool.years.push({ year: year, image_url: image_url });
    }
  });
  refined_data.push(each_tool);
});

generate_year_title(years);
generate_rows(refined_data);
scroll_table_to_right();
console.log(refined_data);
