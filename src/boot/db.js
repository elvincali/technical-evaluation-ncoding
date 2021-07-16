import mock from '../@fake-db/mock';

import '../@fake-db/data/auth';

mock.onAny().passThrough();
