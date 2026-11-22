import JourneyRunner from "sap/fe/test/JourneyRunner";
import ListReport from "sap/fe/test/ListReport";
import ObjectPage from "sap/fe/test/ObjectPage";
import CustomZC_TBL_SUPPL_TEXTListGenerated from "./ZC_TBL_SUPPL_TEXTList.gen";
import CustomZC_TBL_SUPPL_TEXTObjectPageGenerated from "./ZC_TBL_SUPPL_TEXTObjectPage.gen";

const runner = new JourneyRunner({
    launchUrl: sap.ui.require.toUrl("frontend") + "/test/flp.html#app-preview",
    pages: {
        onTheZC_TBL_SUPPL_TEXTListGenerated: new ListReport(
            {
                appId: "frontend",
                componentId: "ZC_TBL_SUPPL_TEXTList",
                entitySet: "",
                contextPath: "/ZC_TBL_SUPPL_TEXT"
            },
            CustomZC_TBL_SUPPL_TEXTListGenerated
        ),
        onTheZC_TBL_SUPPL_TEXTObjectPageGenerated: new ObjectPage(
            {
                appId: "frontend",
                componentId: "ZC_TBL_SUPPL_TEXTObjectPage",
                entitySet: "",
                contextPath: "/ZC_TBL_SUPPL_TEXT"
            },
            CustomZC_TBL_SUPPL_TEXTObjectPageGenerated
        )
    },
    async: true
});

export default runner;
