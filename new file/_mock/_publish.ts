import { MockRequest } from '@delon/mock';

export const PUBLISH = {
  'POST page': (req: MockRequest) => {
    const data = req.body;
    console.log(data);
    return {
      success: 'ok',
      script:
        '{"type":"page","style":"page.DefaultPageLogic","name":null,"title":"","views":[{"type":"view","style":"view.DefaultViewLogic","name":null,"tags":[{"type":"tag","style":"tag.PcPublishTagLogic","name":null,"editblocks":[{"pcEditItem":[{}]}]}]}]}',
    };
  },
};
