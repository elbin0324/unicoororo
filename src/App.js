import cornBanner from './images/cornBanner.jpeg';
import intro from './images/briefintro.png';
import banner2 from './images/banner2.png';
import disclaimer from './images/disclaimer.png';
import video from './images/video_new.mp4';
import outerSpaceCorn from './images/outerSpaceCorn.jpeg';
import rainbowUnicorn from './images/rainbowUnicorn.jpeg';
import tanningUnicorn from './images/tanningUnicorn.jpeg';

import './App.css';

const Header = () => (
    <header id="header" class="alt">
			<h1><a href="index.html">$CORN</a> on Sol</h1>
				<nav id="nav">
					<ul>
						<li><a href="#disclaimer">Disclaimer</a></li>
						<li><a href="https://t.me/jewwestbase" target="_blank">Telegram</a></li>
						<li><a href="https://x.com/basedjewwest"  target="_blank">Twitter</a></li>
						<li><a href="https://dexscreener.com/base/0x3d07464b23b8c0fe767b164c32995a04569a74db" target="_blank" >DexScreener</a></li>
					</ul>
				</nav>
	  </header>
)

const Banner = () => (
    <section id="banner">
      <div class="container">
        <img src={cornBanner} alt="$CORN Banner" className="image small"/>
				<img src={intro} alt="intro" className="image small"/>
				<img src={banner2} alt="" className="image small"/>
      </div>
      <div class="container small">
					<ul class="actions special">
						<li><a href="https://t.me/jewwestbase" target="_blank" class="button large">Telegram</a></li>
						<li><a href="https://x.com/basedjewwest" target="_blank" class="button large">Twitter (X)</a></li>
						<li><a href="https://dexscreener.com/base/0x3d07464b23b8c0fe767b164c32995a04569a74db" target="_blank" class="button large">DexScreener</a></li>
					</ul>
				</div>
		</section>
)

const Main = () => (
  <section id="main" class="container large">
					<div id="disclaimer" class="box">
						<span class="image featured"><img src={disclaimer} alt="" /></span>
                    </div>
					
					<section class="container large">
						<div class="text-content">
							<h3>We are more than just a meme, $CORN is a statement about who we are and what we value</h3>
						</div>
						<div class="container video">
							<video autoplay loop controls class="video">
								<source src={video} type="video/mp4"/>
								Your browser does not support the video tag
							</video>
						</div>
					</section>

					<section class="container large">
						<div class="image-and-text">
							<img src={outerSpaceCorn} alt="" class="image left small"/>
							 <div class="text-content">
								<h2>SOL LAUNCH</h2>
								<ul>
									<li><h3>Contract Renounced and Verified ✅</h3></li>
									<li><h3>Locked Liquidity 🔒</h3></li>
									<li><h3>Fair Community Launch 🤝</h3></li>
								</ul>
							 </div>
						</div>
					</section>

					<section class="container large">
						<div class="image-and-text">
							 <div class="text-content">
								<h2>SOL ROADMAP</h2>
								<ul>
									<li><h3>Growing Giga Chad Culture on Sol 📈</h3></li>
									<li><h3>Taking the #1 Spot on Sol 🥇</h3></li>
								</ul>
							 </div>
							 <img src={rainbowUnicorn} alt="" class="image left small"/>
						</div>
					</section>

					<section class="container large">
						<div class="image-and-text">
							<img src={tanningUnicorn} alt="" class="image left small"/>
							 <div class="text-content">
								<h2>SOL TOKENOMICS</h2>
								<ul>
									<li><h3>Zero Taxes 🚫</h3></li>
									<li><h3>Giga Chad Holders 💪</h3></li>
									<li><h3>Community LP Culture 💬</h3></li>
								</ul>
							 </div>
						</div>
					</section>
				</section>
)

const Footer = () => (
  <footer id="footer">
		<ul class="icons">
		  <li><a href="https://t.me/jewwestbase" target="_blank">Telegram</a></li>
		  <li><a href="https://x.com/basedjewwest"  target="_blank">Twitter</a></li>
			<li><a href="https://dexscreener.com/base/0x3d07464b23b8c0fe767b164c32995a04569a74db" target="_blank" >DexScreener</a></li>
		</ul>
		<ul class="copyright">
			<li>&copy; $CORN. All rights reserved.</li>
		</ul>
	</footer>
)

const App = () => (
  <div id="page-wrapper">
    <Header/>
    <Banner/>
    <Main/>
    <Footer/>
  </div>
)

export default App;
