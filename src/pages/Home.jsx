import React,{useState,useEffect} from 'react'
import { Card,Loader,FormFeild } from '../components'
const RenderCard=({data,title})=>{

  if(data.length>0){
    return data.map((post)=>{return <Card key={post._id} {...post}/>})
  }
  return (<h2 className='mt-5 text-[#6449ff] text-xl uppercase'>{title}</h2>)
}
function Home() {
  const [loader, setLoader] = useState(false)
  const [allPosts, setAllPosts] = useState([])
  const [searchtext, setSearchtext] = useState("")
  const [searchedResult, setSearchedResult] = useState([])
  const [searchTimeout, setSearchTimeout] = useState(null)
  const fetchPosts=async()=>{
    setLoader(true)
   try {
    const response= await fetch("http://localhost:5000/api/v1/post",{
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
      }
    })
    if(response.ok){
     const result=await response.json();
    
       setAllPosts(await result.data.reverse())
       
    }
   } catch (error) {
    console.log(error)
  
   }finally{
    setLoader(false)
    
   }
  }
  useEffect(() => {
    fetchPosts();
  }, [])

  const handleSearch=(e)=>{
    clearTimeout(searchTimeout);
    setSearchtext(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchtext.toLowerCase()) || item.prompt.toLowerCase().includes(searchtext.toLowerCase()));
        setSearchedResult(searchResult);
      }, 500),
    );
  }
  return (
    <section className='max-w-7xl mx-auto'>
        <div>
          <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community Showcase</h1>
          <p className='mt-2 text-[16px] text-[#666e75] max-w-[500px]'>
            Browse through a collection of imaginative and visually stunning images generated by DALL-E AI
          </p>
        </div>
        <div className='mt-16'>
            <FormFeild 
              LableName={"Search posts"}
              name={"text"}
              type={"text"}
              placeholder={"Search posts"}
              value={searchtext}
              handleChange={handleSearch}
            />
        </div>
        <div className='mt-10'>
           {loader?(
           <div className='flex justify-center items-center'>
            <Loader/>
            </div>):<>
            {
              searchtext  && (
                <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                  Showing result to related <span className='text-[#222328]'>{searchtext}</span>
                </h2>
              )
            }
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {searchtext ? (
                <RenderCard 
                data={searchedResult}
                title={"No search result found"}/>
              ):(
                <RenderCard 
                data={allPosts}
                title={"No post found"}/>
               )
              }
            </div>
            </>} 
        </div>
    </section>
  )
}

export default Home
