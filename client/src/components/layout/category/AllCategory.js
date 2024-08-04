
//import axios from 'axios';
import React,{useState,useEffect} from 'react';


const AllCategory = () => {
    const [categoryList,setcategoryList] = useState([]);
    //const [loading, setLoading] = useState(false);

  const getCategoryList = async () => {
   // setLoading(true);
    const response = await fetch("http://localhost:8080/api/v1/auth/category/all");
    const data = await response.json();
    setcategoryList(data.categoryList);
   // setLoading(false);
  };

  useEffect(() => {
    getCategoryList();
  }, []);
  return (
    <div>

      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      {categoryList.map((i) => {
console.log(i.parentId);
if (categoryList.parentId == null) {
  return <li class="nav-item">
  <a class="nav-link active" aria-current="page" href="#">{i.name}</a>
</li>
}else{
    return    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {categoryList.children.name}

    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <li><a class="dropdown-item" href="/policy">  {i.children.name}</a></li>
      <li><a class="dropdown-item" href="/contact">   {i.children.name}</a></li>
      <li><a class="dropdown-item" href="/blog">  {i.children.name}</a></li>
    </ul>
  </li>
}
}) }
        
       
     
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default AllCategory
