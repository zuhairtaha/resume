import { useEffect, useMemo, useState } from 'react';

const sampleFilters = ['php', 'all', 'vbulletin', 'html'];

/** @typedef {{ id: string, progress: string }} Skill */
/** @typedef {{ id: string, programming: string, year: string, link?: string, width: string }} Sample */

function ProfileCard() {
	return (
		<div className="card z-depth-3">
			<div className="card-panel card-profile-left z-depth-0 my-dark-blue white-text hvr-curl-bottom-left mt-0">
				<img id="personal-photo" className="circle responsive-img" src="/images/zuhair_taha.jpg" alt="zuhair taha" />
				<div className="center-align">
					<h5 className="h4-name">Zuhair Taha</h5>
					<p>Web Developer</p>

					<div style={{ fontSize: 24 }}>
						<a
							className="hvr-bounce-in btn-floating btn-flat waves-effect waves-light my-social-btns"
							href="https://github.com/zuhairtaha/">
							<i className="fa fa-lg fa-github" aria-hidden="true"></i>
						</a>
						<a
							className="hvr-bounce-in btn-floating btn-flat waves-effect waves-light my-social-btns"
							href="https://tahasoft.com/">
							<i className="fa fa-lg fa-globe" aria-hidden="true"></i>
						</a>
						<a
							className="hvr-bounce-in btn-floating btn-flat waves-effect waves-light my-social-btns"
							href="https://www.linkedin.com/in/zuhairtaha/">
							<i className="fa fa-lg fa-linkedin-square" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
			<div className="card-panel z-depth-0">
				<a
					className="hvr-grow-shadow btn red darken-2 waves-effect waves-light btn-block"
					href="/pdf/zuhair_taha_CV.pdf">
					Download CV
				</a>
			</div>
		</div>
	);
}

/** @param {{ skills: Skill[] }} props */
function SkillsCard({ skills }) {
	return (
		<div className="card z-depth-3">
			<div className="card-content z-depth-0">
				<h3 className="main-titles">skillset</h3>

				<div className="programming-skills row">
					{skills.map(skill => (
						<div className="col s6 m4" key={skill.id}>
							<p>{skill.id}</p>
							<div className="progress grey lighten-2">
								<div className="determinate red darken-4" style={{ width: `${skill.progress}%` }}></div>
							</div>
						</div>
					))}
				</div>

				<div className="row">
					<h5>As well as some experience in:</h5>
					<p className="extra-skills-desc">
						NextJS, Material UI, Bootstrap, MongoDB, GraphQL, PHP Codeigniter, C#, ASP.NET, C++, Java, Android Studio,
						...
					</p>
				</div>
			</div>
		</div>
	);
}

/** @param {{ samples: Sample[] }} props */
function SamplesCard({ samples }) {
	const [activeFilter, setActiveFilter] = useState('all');

	const filteredSamples = useMemo(() => {
		if (activeFilter === 'all') return samples;
		return samples.filter(sample => sample.programming === activeFilter);
	}, [activeFilter, samples]);

	return (
		<div className="card z-depth-3" id="samples">
			<div className="card-content z-depth-0">
				<h3 className="main-titles">Samples of my work:</h3>

				<div className="row">
					<div className="col s12">
						<ul className="tabs" id="filter-samples">
							{sampleFilters.map(filterName => (
								<li key={filterName} data-filter={filterName} className="tab col s3">
									<a
										href="#"
										className={activeFilter === filterName ? 'active' : ''}
										onClick={event => {
											event.preventDefault();
											setActiveFilter(filterName);
										}}>
										{filterName.toUpperCase()}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<ul id="lightgallery" className="grid">
					<li className="grid-sizer"></li>
					{filteredSamples.map(web => {
						const itemClass = web.width === '2' ? 'grid-item grid-item--width2' : 'grid-item';

						return (
							<li className={itemClass} key={web.id}>
								<a
									className="hvr-grow-shadow"
									href={`/images/websites/${web.id}.jpg`}
									target="_blank"
									rel="noreferrer"
									title={`${web.programming} - ${web.year}`}>
									<img
										className="responsive-img z-depth-2"
										src={`/images/thumb/thumb_${web.id}.jpg`}
										alt={`thumb_${web.id}`}
									/>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

function VerticalIcons() {
	return (
		<div className="vertical-icons-div hide-on-small-and-down">
			<a className="waves-effect waves-light tooltipped" href="#Summary">
				<i className="outline-chat icon-image-preview"></i>
			</a>
			<a className="waves-effect waves-light tooltipped" href="#Personal-information">
				<i className="outline-perm_identity icon-image-preview"></i>
			</a>
			<a className="waves-effect waves-light tooltipped" href="#Languages">
				<i className="outline-language icon-image-preview"></i>
			</a>
			<a className="waves-effect waves-light tooltipped" href="#Education">
				<i className="outline-school icon-image-preview"></i>
			</a>
			<a className="waves-effect waves-light tooltipped" href="#Courses">
				<i className="outline-local_library icon-image-preview"></i>
			</a>
			<a className="waves-effect waves-light tooltipped" href="#Work-Experience">
				<i className="outline-touch_app icon-image-preview"></i>
			</a>
			<a className="waves-effect waves-light tooltipped" href="#samples">
				<i className="outline-mms icon-image-preview"></i>
			</a>
		</div>
	);
}

export default function App() {
	const [skills, setSkills] = useState(/** @type {Skill[]} */ ([]));
	const [samples, setSamples] = useState(/** @type {Sample[]} */ ([]));

	useEffect(() => {
		Promise.all([
			fetch('/javascripts/skills.json').then(response => response.json()),
			fetch('/javascripts/samples.json').then(response => response.json())
		])
			.then(([skillsData, samplesData]) => {
				setSkills(skillsData);
				setSamples(samplesData);
			})
			.catch(error => {
				console.error('Failed to load skills or samples:', error);
			});
	}, []);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col s12 l3 sticky-top">
						<ProfileCard />
					</div>

					<div className="col s12 l8">
						<div style={{ height: '100%' }} id="Personal-information" className="card z-depth-3">
							<div className="card-content z-depth-0">
								<h3 className="main-titles">Personal information</h3>
								<div className="my-list">
									<i className="material-icons">person</i>
									<span className="personal-label-span">Name:</span> Zuhair Taha
									<br />
									<i className="material-icons">email</i>
									<span className="personal-label-span">E-mail:</span>
									<a href="mailto:zuhairtaha1@gmail.com">zuhairtaha1@gmail.com</a>
									<br />
									<i className="material-icons">phone</i>
									<span className="personal-label-span">Phone:</span>
									<a href="tel:+4591491462">+45 914 914 62</a>
								</div>
							</div>
						</div>

						<div id="Summary" className="card z-depth-3">
							<div className="card-content z-depth-0">
								<h3 className="main-titles">Summary</h3>
								<p className="main-text">
									Experienced web developer with a demonstrated history of working in the computer software industry.
									Skilled in both front-end and back-end development. I care a lot about elegant design using modern web
									trends. I focus on high performance and I am interested in databases with a great passion. Strong
									information technology professional with a bachelor&apos;s degree focused in Information System
									Engineering.
								</p>
							</div>
						</div>

						<SkillsCard skills={skills} />

						<div id="Education" className="card z-depth-3">
							<div className="card-content z-depth-0">
								<h3 className="main-titles">Education</h3>
								<div className="education">
									<div className="education-box">
										<span className="education-date">
											<span>2012-2018</span>
										</span>
										<h3>
											<a target="_blank" rel="noreferrer" className="hvr-float-shadow" href="http://svuonline.org">
												Syrian Virtual University
											</a>
										</h3>
										<p>
											Bachelor Degree <br />
											Information System Engineering <br />
											Software Applications Developing with assessment in Denmark to (diplomingenior-softwareteknologi){' '}
											<br />
											<i className="fa fa-map-marker"></i> Damascus, Syria
										</p>
									</div>

									<div className="education-box">
										<span className="education-date">
											<span>2008-2010</span>
										</span>
										<h3>
											<a
												style={{ fontSize: '.6em' }}
												target="_blank"
												rel="noreferrer"
												className="hvr-float-shadow"
												href="http://site.ypu.edu.sy/">
												Yarmouk Private University
											</a>
										</h3>
										<p>
											Information Technology <br />
											<i className="fa fa-map-marker"></i> Daraa, Syria
										</p>
									</div>

									<div className="education-box">
										<span className="education-date">
											<span>2004-2007</span>
										</span>
										<h3>
											<a
												target="_blank"
												rel="noreferrer"
												className="hvr-float-shadow"
												href="http://www.tishreen.edu.sy/">
												Tishreen University
											</a>
										</h3>
										<p>
											Mechatronics Engineering <br />
											<i className="fa fa-map-marker"></i> Latakia, Syria
										</p>
									</div>
								</div>
							</div>
						</div>

						<div style={{ height: '100%' }} id="Languages" className="card z-depth-3">
							<div className="card-content z-depth-0 text-center center-align">
								<div className="Progress" data-percentage="15">
									<span className="progress-left">
										<span className="progress-bar"></span>
									</span>
									<span className="progress-right">
										<span className="progress-bar"></span>
									</span>
									<div className="progress-value">
										<div>
											Da
											<br />
											<span>Danish</span>
										</div>
									</div>
								</div>

								<div className="Progress" data-percentage="75">
									<span className="progress-left">
										<span className="progress-bar"></span>
									</span>
									<span className="progress-right">
										<span className="progress-bar"></span>
									</span>
									<div className="progress-value">
										<div>
											En
											<br />
											<span>English</span>
										</div>
									</div>
								</div>

								<div className="Progress" data-percentage="100">
									<span className="progress-left">
										<span className="progress-bar"></span>
									</span>
									<span className="progress-right">
										<span className="progress-bar"></span>
									</span>
									<div className="progress-value">
										<div>
											Ar
											<br />
											<span>Arabic</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="courses-work-experience">
							<div id="Courses" className="card z-depth-3">
								<div className="card-content z-depth-0">
									<h3 className="main-titles">Courses</h3>
									<ul className="collection no-borders">
										<li className="collection-item avatar" style={{ lineHeight: '2rem' }}>
											<i className="material-icons circle red darken-2">bookmarks</i>
											<span className="title">Web development course</span>
											<p>
												<a target="_blank" rel="noreferrer" href="https://hackyourfuture.dk/">
													Hack Your Future Coding school
												</a>
												<br />
												Copenhagen, Denmark <br />
												(july 2018 ~ Jan 2019)
											</p>
										</li>
										<li className="collection-item avatar" style={{ lineHeight: '2rem' }}>
											<i className="material-icons circle red darken-2">play_arrow</i>
											<p>Many online programming and web development courses at YouTube, Udemy, Lynda, ...</p>
										</li>
									</ul>
								</div>
							</div>

							<div id="Work-Experience" className="card z-depth-3">
								<div className="card-content z-depth-0">
									<h3 className="main-titles">Work Experience</h3>
									<ul className="collection no-borders">
										<li className="collection-item avatar">
											<i className="material-icons circle red darken-2">code</i>
											<span className="title">Freelance web developer</span>
											<p>2009 ~ 2017</p>
										</li>
										<li className="collection-item avatar">
											<i className="material-icons circle red darken-2">computer</i>
											<span className="title">Teaching ICDL courses</span>
											<p>2008</p>
										</li>
										<li className="collection-item avatar">
											<i className="material-icons circle red darken-2">brush</i>
											<span className="title">Graphic Designer</span>
											<p>2007 ~ 2009</p>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<SamplesCard samples={samples} />

						<div id="Contact" className="card z-depth-3">
							<div className="card-content z-depth-0">
								<h3 className="main-titles">Contact</h3>
								<p className="main-text">Feel free to contact me</p>
								<form action="https://contactform.dk/zuhairtaha1@gmail.com">
									<div className="input-field">
										<textarea id="message" name="message" className="materialize-textarea"></textarea>
										<label htmlFor="message">Message</label>
									</div>
									<button type="submit" className="waves-effect waves-light btn-small">
										<i className="material-icons right">send</i>
										send
									</button>
								</form>
							</div>
						</div>
					</div>

					<div className="col s1 sticky-top">
						<VerticalIcons />
					</div>
				</div>
			</div>

			<svg id="crtBgShape1" className="hidden-sm hidden-xs" height="519" width="758">
				<polygon className="pol" points="0,455,693,352,173,0,92,0,0,71"></polygon>
			</svg>

			<svg id="crtBgShape2" className="hidden-sm hidden-xs" height="536" width="633">
				<polygon points="0,0,633,0,633,536"></polygon>
			</svg>

			<div className="fixed-action-btn hide" style={{ top: 45, right: 24 }}>
				<a id="menu" className="btn btn-floating btn-large grey lighten-3" href="#">
					<i className="material-icons black-text">menu</i>
				</a>
			</div>

			<div className="fixed-action-btn" style={{ bottom: '1em', right: '2em' }}>
				<a
					id="goToTop"
					href="#body"
					className="scrollTo btn-floating btn-large waves-effect waves-light red darken-2 lighten-1">
					<i className="material-icons">arrow_upward</i>
				</a>
			</div>
		</>
	);
}
