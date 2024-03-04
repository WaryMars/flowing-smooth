import videoJewerely from '../assets/video/videoJewerely.webm'

const Home = () => {
  return (
    <section>
      <div className='home' >
        <div className="overlay"></div>
        <video src={videoJewerely} autoPlay loop muted />
        <div className="content">
          <h1 className='text-white font-yavome text-8xl max-lg:text-4xl pb-3'>FlowingSmooth</h1>
          <span className='text-white font-basteleur text-xl max-lg:text-lg pb-10'>Capturer l'essence de la fluidité, incarner la douceur</span>
          <button class="hover:brightness-110 hover:bg-white hover:text-black border-2 border-white font-bold py-3 px-6 rounded-full bg-transparent text-white">Achetez Maintenant</button>
        </div>
      </div >
    </section>


  )
}

export default Home

 