import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// Function to fetch markdown data from Firebase
export const fetchMarkdownData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "blogPosts"));
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    return posts;
  } catch (error) {
    console.error("Error fetching markdown data: ", error);
    throw error;
  }
};