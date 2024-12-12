import Flags from "../context/Flags";

export default function setFlags(language) {
    if (language === "en") {
      return Flags.usa;
    } else if (language === "it"){
        return Flags.ita
    } else if (language === 'ja'){
        return Flags.jap
    }
  }
