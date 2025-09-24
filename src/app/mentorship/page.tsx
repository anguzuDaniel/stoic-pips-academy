import PageText from "../components/ text/PageText";
import PageTitle from "../components/ text/PageTitle";
import SubPageLayout from "../components/SubPageLayout";

export default function Mentorship() {
    return (
        <SubPageLayout>
            <PageTitle text="Mentorship"></PageTitle>

            <PageText text={`Founded in 2024 by, we focus on discipline, mindset, and strategy to grow your trading journey.`}></PageText>
        </SubPageLayout>
    );
}