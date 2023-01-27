import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ServiceArchiveOutline.svg';

export function ServiceArchiveOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ServiceArchiveOutline">
      <SVG />
    </Icon>
  );
}
