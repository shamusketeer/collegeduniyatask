import React, { useState, useEffect } from "react";

const dummyData = [
  {
    id: 1,
    name: "IIT Madras - Indian Institute of Technology - [IITM], Chennai",
    featured: true,
    rating: "4.5 / 5.0",
    fees: "₹ 2,09,550",
    userRating: "4.2 / 5.0",
  },
  {
    id: 2,
    name: "NIT Trichy - National Institute of Technology - [NITT], Tiruchirappalli",
    featured: false,
    rating: "4.3 / 5.0",
    fees: "₹ 1,90,000",
    userRating: "4.0 / 5.0",
  },
  {
    id: 3,
    name: "Anna University - [AU], Chennai",
    featured: false,
    rating: "4.2 / 5.0",
    fees: "₹ 1,20,000",
    userRating: "4.1 / 5.0",
  },
  {
    id: 4,
    name: "BITS Pilani - Birla Institute of Technology and Science, Pilani",
    featured: true,
    rating: "4.6 / 5.0",
    fees: "₹ 3,50,000",
    userRating: "4.5 / 5.0",
  },
  {
    id: 5,
    name: "VIT Vellore - Vellore Institute of Technology, Vellore",
    featured: false,
    rating: "4.4 / 5.0",
    fees: "₹ 2,50,000",
    userRating: "4.3 / 5.0",
  },
  {
    id: 6,
    name: "IIT Delhi - Indian Institute of Technology, Delhi",
    featured: true,
    rating: "4.7 / 5.0",
    fees: "₹ 2,30,000",
    userRating: "4.6 / 5.0",
  },
  {
    id: 7,
    name: "IIM Ahmedabad - Indian Institute of Management, Ahmedabad",
    featured: true,
    rating: "4.8 / 5.0",
    fees: "₹ 25,00,00",
    userRating: "4.7 / 5.0",
  },
  {
    id: 8,
    name: "IIIT Hyderabad - International Institute of Information Technology, Hyderabad",
    featured: false,
    rating: "4.3 / 5.0",
    fees: "₹ 2,00,000",
    userRating: "4.2 / 5.0",
  },
  {
    id: 9,
    name: "IISC Bangalore - Indian Institute of Science, Bangalore",
    featured: false,
    rating: "4.6 / 5.0",
    fees: "₹ 1,80,000",
    userRating: "4.4 / 5.0",
  },
  {
    id: 10,
    name: "SRM University, Chennai",
    featured: true,
    rating: "4.2 / 5.0",
    fees: "₹ 2,20,000",
    userRating: "4.0 / 5.0",
  },
  {
    id: 11,
    name: "Amrita Vishwa Vidyapeetham, Coimbatore",
    featured: true,
    rating: "4.5 / 5.0",
    fees: "₹ 2,40,000",
    userRating: "4.3 / 5.0",
  },
  {
    id: 12,
    name: "IIT Kanpur - Indian Institute of Technology, Kanpur",
    featured: false,
    rating: "4.4 / 5.0",
    fees: "₹ 2,20,000",
    userRating: "4.2 / 5.0",
  },
  {
    id: 13,
    name: "IIIT Bangalore - International Institute of Information Technology, Bangalore",
    featured: false,
    rating: "4.3 / 5.0",
    fees: "₹ 2,10,000",
    userRating: "4.1 / 5.0",
  },
  {
    id: 14,
    name: "Manipal Institute of Technology, Manipal",
    featured: true,
    rating: "4.6 / 5.0",
    fees: "₹ 2,30,000",
    userRating: "4.4 / 5.0",
  },
  {
    id: 15,
    name: "IIM Bangalore - Indian Institute of Management, Bangalore",
    featured: true,
    rating: "4.9 / 5.0",
    fees: "₹ 23,00,00",
    userRating: "4.8 / 5.0",
  },
  {
    id: 16,
    name: "IIT Kharagpur - Indian Institute of Technology, Kharagpur",
    featured: false,
    rating: "4.2 / 5.0",
    fees: "₹ 2,10,000",
    userRating: "4.0 / 5.0",
  },
  {
    id: 17,
    name: "NIT Warangal - National Institute of Technology, Warangal",
    featured: false,
    rating: "4.3 / 5.0",
    fees: "₹ 2,00,000",
    userRating: "4.1 / 5.0",
  },
  {
    id: 18,
    name: "IIT Roorkee - Indian Institute of Technology, Roorkee",
    featured: true,
    rating: "4.8 / 5.0",
    fees: "₹ 2,40,000",
    userRating: "4.6 / 5.0",
  },
  {
    id: 19,
    name: "BITS Goa - Birla Institute of Technology and Science, Goa",
    featured: false,
    rating: "4.4 / 5.0",
    fees: "₹ 2,50,000",
    userRating: "4.2 / 5.0",
  },
  {
    id: 20,
    name: "IIT Guwahati - Indian Institute of Technology, Guwahati",
    featured: true,
    rating: "4.5 / 5.0",
    fees: "₹ 2,20,000",
    userRating: "4.3 / 5.0",
  },
];

const CollegeTable = () => {
  const [colleges, setColleges] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleColleges, setVisibleColleges] = useState(10);

  useEffect(() => {
    // Load initial colleges
    setColleges(dummyData.slice(0, visibleColleges));
  }, [visibleColleges]);

  useEffect(() => {
    // Implement sorting
    if (sortBy) {
      const sortedColleges = [...colleges].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
      });
      setColleges(sortedColleges);
    }
  }, [sortBy, colleges]);

  const handleSort = (key) => {
    setSortBy(key);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setVisibleColleges((prevVisibleColleges) => prevVisibleColleges + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by college name"
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>College ID</th>
            <th onClick={() => handleSort("name")}>College Name</th>
            <th onClick={() => handleSort("rating")}>CollegeDunia Rating</th>
            <th onClick={() => handleSort("fees")}>Fees</th>
            <th onClick={() => handleSort("userRating")}>User Review Rating</th>
            <th>Featured</th>
          </tr>
        </thead>
        <tbody>
          {filteredColleges.map((college) => (
            <tr key={college.id}>
              <td>{college.id}</td>
              <td>{college.name}</td>
              <td>{college.rating}</td>
              <td>{college.fees}</td>
              <td>{college.userRating}</td>
              <td>{college.featured ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollegeTable;
