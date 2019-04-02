import { Component, OnInit } from '@angular/core';
import * as pbi from 'powerbi-client';
@Component({
  selector: 'app-bi-reports',
  templateUrl: './bi-reports.component.html',
  styleUrls: ['./bi-reports.component.css']
})
export class BiReportsComponent implements OnInit {
  ReportID: String;
  constructor() { }

  ngOnInit() {
    this.showReport;
  }
showReport() {
    // Report's Secured Token
    let accessToken = 'H4sIAAAAAAAEACWWta7FCpJF_-WlHslMI3VgPmbGzMzMbs2_z1V3VsEOSktVS_vf_1jpO8xp8c___vMjGG3DykzQ1k6aiLUMHdEVNUGhW0N0XkuJIqCKK6eam48zMVEGvXK3XajXOmRuC2LVAcoOskx7mhsHcqS73AC9d9tgGyGfiaybvM5NRJ3tfaTGOuIGbxTRc0kvQneqJpp91GPozvVRFjUoelDRHcBI1_OThrgpqdmGdKtI0niAgiyCRM9r8sQfIHn8PsfZhTx5XWiJ7HFA2nfVTxsYvB4rHBnvq0Yh2PjlguuyalMmP8R6y_IUq4slJo9DSa5GmsztSWDopJx1sS8MJn_Y4BV5GNfnDFhYnJcme8OB6Jb3S2hxr66uXv7eoZ0_tLiAZTOZaIBKqceIC7Y8fwezT2WF1ojJLGcINaq6FQx3sKuG3fgxiH3vKJviD_1KTHSwXwuXYzVW2-quf4pz_vRBO_lg7BmpEaQE126sBBDskUV2mbspjDrlqu1ZhBY2wwGGkJjEM4KFGD7CTDIZRXrl21cD8DYbfYkp-G3MV2eNvgKEuZTphSJYA5LXRDlHBDwCkNKA6yfrKi_Mx5OPEFLQvC-o5tE3B5Qkenuevce_gfBOP4YGd8AVtbWN07BTxPAs11mAbkRyfJnE_OKQrcerBc5tcc8zBDKQ6PbguNaWoHbO06Io0AB5TOcPYWNKFIZ0dFuUd0od_LSlE32pigM7giwv8LAuHfauHcy88VJbiY7PnJHWjPAN6PbARpVKGXcjGL6govU8J55RlQ6cKSLCR51V2C2QO4l0VfQ5eDhKY0AUua3Z0smuZbVPJtAXBnjJrd3ryDJ-i74eliExNmsr6lLCbqnBk6_JsepSnT4yP4G6tPnUcjC-_07otl-9ebXAGv0xQ0tyznmPNzYExO6suhOzLobq1vtTzz47DmoycuFoqNXdvxT10EGGTHIkJVPY91jnhJVp_Cw3vjzIcfBIFKsVMYR0fEqeLkT2p-Yxs5kIJ-qvzwqByr9ATGYTuu-fu4-y04BcxzNxtgqskOJhOuX-Hq6uE61oCFVyz_YHN1y8SmfZxI8pKdgDs3xO29mH51yR3jEAdbW1SUMoAlkWvYYtEykDzYdBggqB6RhizFWN5n_PmTQxbxiqaaGj6sQ64BCqJ1FR688O-LctARQl0IAKW1JGICdVtDcJ6aFJO617b3EyH3R4Ewq_7FRF-pvH_NceP7Yizmhi8Q4afK1t8ilzk1yof1B3TxJgnXozcsBoP_jyhY6cSVfdUounJZpcSOW9Bh3JQGUD8GK7k5LIAQANlQ6omRSuOfoaoSq4eopHBkvdhT5CbtnHiQqFRT26E0dMJxiShXT5orkdq9n-1cGDTuQQ8GSAkIUmwzb391Ja50QbsyPQKPBHNrB70sX02MJqgMJLR5Zdln89dSZ8v22SHngIELZbuY5ZVRi1-ol8CIUvhxo1_eAphi--zdNH43Pqavf31J-W5SUqb1MPDmxmlbku1oO8-Z7WJ7OL_-1Hcz5q_I4eQ9lJKc0oAgu3Yfo2UMy4mVbwREGHtoxjyeDi9_QAhdtY7WfrsSbPW2yH48STbz_EUayh3BCgo5qtqIaceLKpM16EHpgNqVK8-bESpKlWkxpvYUpeCAIF5QQWRtHpK19Lfdeu_YHknCZLmt1BDdt0ywZkzwOl5WpNCDoxe8AdXhs-mNRMMMeRmgksSl8f_hY4yLXec0mJ8-4oYMCBop7X2UeAeHeVzX_t556p037bQ6JNe5DUT2c5yvd7KySepIJ6-k-i9Hz4k4Y4XEbJofsnPlsEmqvBipp0mA0WHA3FiQanmdthTrGhkooEW-1ZiByawwa9n0EbP9kYuCQdSh2OXPZEk7dZE0IKBNrUpTEYOsLIwuk5pa6YDuT8jNiuFKRfrZh1DeNXz1Ln2Q0DderHm4cRvoZMfEMifQvNls9qE1Yt_Uj4wynceEPSGpWcTxhzCG3TLDtaL1drFYPKCgOypnRz9YEKhdLyalHEc07EXDjCExl5xcQ00-g_ZioksPbGHpL9-2nrPS2jysH3SNEUcs8rb0TS8uhYuZjp1QmahjcjDsCn6rnRL_z8TC8q7oTVjyYblgeBZ2qQd94pr1B22RCnYCLoBwBRsj4LmCBhUTgFhDkyYUVkxUt-IQrgbAeBGm0MU63EOPnTv0RlD0ADnh72Q0GQ8RUKXhngfz3H_Otf__zPP9z2Lseslu9fzajVDs70BfX1Z8ezzZzvlXpbN2CsGaabRNTSrpXgBFyb8JlmIp-ZJSZfpIElE7ihR8Y59gN2BvwxtcQ_UBqj1DJx7jJtpUsY_Fufe-H88Dy7hkHKCn24mtZoS2GXekCfhoqROrSBsLzshM3dI2Rh6CqpicDanzr5cxbedKnWN4XAw9UBInmsj5huJWhEtB1Rc62-5cyRBDvw7T2RyMooVZ2IEUyp5hcTHB7tXgetvo3ajct9VGS8o1AF6TZk1AL9gnwkDSVjCA8OgUX67jDLyFzCVhbNs4wt4RvMSLEnNM6gibrsupL3-x1HWsf7D6LDY9d2b95bdss7GrVYzvHelbVw-7-Y36UpNzn4o3yvIWLV2q5CCGaqq2yT7dzd_0m5bT2lx7mVf7FVsf48RjfwSikZ_9d3bBNlExIYfw_OXbBbQ3_j7k8ALut3lxNrI3e1mVFp5DbxpyWr8AGcORQQSpXM4St188UeoNoBry-I2gExiDvRB6pD-P2g1tFx0ZCPnDSfzixvoeoLx84MPq6CIum_NjZ_Xx_CmWXHRD6M1jHHJyXAn4i2LqckIONhA22q5AF4FXLlloBl6BD4pueHquwh2YASdeH7MPHyJWnWTRdsjURs7XSYJrUyfUdwNpqV2MrmTxq6O7L4apuk_RL38pAmaelM4miCArvE6ehU_GqDZntuBSq0eQ_eliTTM1CFA762C20sPD8ylEvjrMdtg_WF7uVCuaFd9R_m__t_DpdkIloLAAA=';

    // Embed URL reporID

    let embedUrl = 'https://app.powerbi.com';

    // Report ID
    let embedReportId = 'f6bfd646-b718-44dc-a378-b73e6b528204';

    // Configuration used to describe the what and how to embed.
    // This object is used when calling powerbi.embed.
    // This also includes settings and options such as filters.
    // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
    let config= {
        type: 'report',
        accessToken: accessToken,
        embedUrl: embedUrl,
        id: embedReportId,
        settings: {
          
            filterPaneEnabled: true,
            navContentPaneEnabled: true,
            localeSettings: {
              language: "en",
              formatLocale: "es"
            }
        }
    };

    // Grab the reference to the div HTML element that will host the report.
    let reportContainer = <HTMLElement>document.getElementById('reportContainer');

    // Embed the report and display it within the div container.
    let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
    let report = powerbi.embed(reportContainer, config);

    // Report.off removes a given event handler if it exists.
    report.off("loaded");

    // Report.on will add an event handler which prints to Log window.
    report.on("loaded", function() {
        console.log("Loaded");
    });
}

}
