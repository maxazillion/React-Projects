import { JasonImg } from "components";

function Header() {
  return (
    <div className="flex pl-2">
      <div className="flex flex-col rounded-b-lg mr-2 mb-2 bg-white self-center p-2 min-w-max SafetyOrange shadow-lg">
        <JasonImg />

        <div className="flex pt-2">
          <div className="flex shadow">
            <a
              href="https://github.com/maxazillion"
              className="flex hover:bg-yellow-300 hover:text-white rounded p-2 pr-0"
              target="blank"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                className="object-scale-down h-10"
                alt="github kitty"
              />
            </a>
          </div>
          <div className="flex shadow">
            <a
              href="https://www.linkedin.com/in/jason-rodgers-b88081204/"
              className="flex hover:bg-blue-400 hover:text-white rounded p-2 pl-0"
              target="blank"
            >
              <img
                src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png"
                className="object-scale-down h-12"
                alt="linked in icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="self-center min-w-full rounded-l-lg QueenBlue shadow-lg">
        <h1 className="text-4xl p-2 pb-0">Jason Rodgers</h1>
        <a
          href="https://drive.google.com/file/d/1SKXCqwO9hxyMfc80up32z3CDv4uFHEIV/view?usp=sharing"
          target="blank"
        >
          <h1 className="p-3 pt-0">Project Showcase</h1>
          <h1 className="p-3 pt-0 text-xs">Click for Resumè</h1>
        </a>
      </div>
    </div>
  );
}

//https://drive.google.com/file/d/1ThxlylY3mPqiEULL4uwpfBPoXAQ51nTd/view?usp=sharing
export default Header;
