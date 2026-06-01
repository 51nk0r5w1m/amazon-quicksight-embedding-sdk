import {createEmbeddingContext} from '../../src';

describe('MVP public API smoke', () => {
    const TEST_DASHBOARD_URL = 'https://test.amazon.com/embed/guid/dashboards/testDashboardId?authcode=testAuthCode';
    const TEST_VISUAL_URL =
        'https://test.amazon.com/embed/guid/dashboards/testDashboardId/sheets/testSheetId/visuals/testVisualId?authcode=testAuthCode';
    const TEST_CONSOLE_URL = 'https://test.amazon.com/embedding/guid/start/favorites?authcode=testAuthCode';

    afterEach(() => {
        document.body.innerHTML = '';
        jest.restoreAllMocks();
    });

    it('embeds dashboard experience with core API shape', async () => {
        const embeddingContext = await createEmbeddingContext();
        const dashboardContainer = document.createElement('div');
        document.body.append(dashboardContainer);

        expect(typeof embeddingContext.embedDashboard).toBe('function');

        const embeddedDashboard = await embeddingContext.embedDashboard({
            url: TEST_DASHBOARD_URL,
            container: dashboardContainer,
        });
        expect(typeof embeddedDashboard.getParameters).toBe('function');
        expect(dashboardContainer.querySelector('iframe')).toBeTruthy();
    });

    it('embeds visual experience with core API shape', async () => {
        const embeddingContext = await createEmbeddingContext();
        const visualContainer = document.createElement('div');
        document.body.append(visualContainer);

        expect(typeof embeddingContext.embedVisual).toBe('function');

        const embeddedVisual = await embeddingContext.embedVisual({
            url: TEST_VISUAL_URL,
            container: visualContainer,
        });
        expect(typeof embeddedVisual.setParameters).toBe('function');
        expect(visualContainer.querySelector('iframe')).toBeTruthy();
    });

    it('embeds console experience with core API shape', async () => {
        const embeddingContext = await createEmbeddingContext();
        const consoleContainer = document.createElement('div');
        document.body.append(consoleContainer);

        expect(typeof embeddingContext.embedConsole).toBe('function');

        const embeddedConsole = await embeddingContext.embedConsole({
            url: TEST_CONSOLE_URL,
            container: consoleContainer,
        });
        expect(typeof embeddedConsole.send).toBe('function');
        expect(consoleContainer.querySelector('iframe')).toBeTruthy();
    });
});
