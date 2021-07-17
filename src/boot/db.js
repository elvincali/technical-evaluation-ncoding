import mock from '../@fake-db/mock';

import '../@fake-db/data/auth';
import '../@fake-db/data/courses';

mock.onAny().passThrough();
