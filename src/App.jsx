import {
    CompoundButton,
    Text,
    Title1
} from "@fluentui/react-components";
import {
    ArrowDownloadRegular,
    ArchiveMultipleRegular
} from "@fluentui/react-icons";
import './App.css';

export function App() {
    return (
        <div className="container">
            <Title1
                align="center"
                className="title">Anti-cheating Exam System</Title1>
            <Text align="center">A lightweight answering system that effectively prevents cheating on exams.</Text>
            <div className="buttonGroup">
                <CompoundButton
                    as="a"
                    href="https://github.com/cyprinus-carpio/anti-cheating-exam-system/releases/download/Releases/Auto_Installer.zip"
                    target="_blank"
                    secondaryContent="Latest release version"
                    appearance="primary"
                    icon={<ArrowDownloadRegular />}
                >
                    Download Auto Installer
                </CompoundButton>
                <CompoundButton
                    as="a"
                    href="https://github.com/cyprinus-carpio/anti-cheating-exam-system/releases"
                    target="_blank"
                    secondaryContent="All released versions"
                    icon={<ArchiveMultipleRegular />}
                >
                    View more versions
                </CompoundButton>
            </div>
            <Text align="center">&copy; 2025 Cyprinus-carpio. All rights reserved.</Text>
        </div>
    );
}
