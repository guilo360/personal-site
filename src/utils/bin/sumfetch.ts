import config from '../../../config.json';

const hello = async (args: string[]): Promise<string> => {
  return `


      #    #   ########   ######
    ##########        #
      #    #         #  ##########
           #       ##        #
          #      ## #        #
         #      ##   #      #
       #       #      #   ##

     Kain Meyer-Scott

       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
       <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
       <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u

`;
};

export default hello;
