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
            <Text>A lightweight answering system that effectively prevents cheating on exams</Text>
            <div className="buttonGroup">
                <CompoundButton
                    secondaryContent="Latest release version"
                    appearance="primary"
                    icon={<ArrowDownloadRegular />}
                >
                    Download
                </CompoundButton>
                <CompoundButton
                    secondaryContent="All versions"
                    icon={<ArchiveMultipleRegular />}
                >
                    View more
                </CompoundButton>
            </div>
            <Text>&copy; 2025 Cyprinus-carpio. All rights reserved.</Text>
        </div>
    );
}