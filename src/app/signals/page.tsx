import PageText from "../components/ text/PageText";
import PageTitle from "../components/ text/PageTitle";
import SubPageLayout from "../components/layout/SubPageLayout";

export default function Resources() {
    return (
        <SubPageLayout>
            <PageTitle text="Signals"></PageTitle>

            <PageText text={`Founded in 2024 by, we focus on discipline, mindset, and strategy to grow your trading journey.`}></PageText>
        </SubPageLayout>
    );
}