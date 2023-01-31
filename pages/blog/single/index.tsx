import type {NextPage} from 'next'
import Layout from "../../../business/container/general/layout/layout";
import Banner from "../../../business/container/general/views/cotizar/banner/banner";
import SingleBlog from "../../../business/container/general/views/blog/singleBlog/singleBlog";
import blog from "../../../services/blog.json"


const Home: NextPage = () => {
    return (
        <Layout>
            <Banner title="Blogs" content1="Blog " content2={blog.que_es_tornillo.title}/>
            <SingleBlog />
        </Layout>
    )
}

export default Home
