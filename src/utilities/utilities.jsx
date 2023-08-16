// src/utilities/utilities.jsx

export const getMonthName = (monthNumber) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[monthNumber - 1] || "Invalid Month";
};

export const capitalizeFirstLetter = (str) => {
  // Split the string into an array of words
  const words = str.split(" ");

  // Iterate through each word and capitalize the first letter
  const capitalizedWords = words.map((word) => {
    // Ensure the word is not empty
    if (word.length === 0) {
      return word;
    }
    // Capitalize the first letter and combine it with the rest of the word
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the capitalized words back into a string
  return capitalizedWords.join(" ");
};
