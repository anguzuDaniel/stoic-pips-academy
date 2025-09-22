import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

export default function CheckoutPage() {
    const { theme } = useTheme();
    const params = useParams();
    const router = useRouter();
}