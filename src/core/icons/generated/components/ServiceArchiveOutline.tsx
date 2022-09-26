import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ServiceArchiveOutline.svg';

export function ServiceArchiveOutline(props: TProps) {
  return (
    <Icon {...props} name="ServiceArchiveOutline">
      <SVG />
    </Icon>
  );
}
