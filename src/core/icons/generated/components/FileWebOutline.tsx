import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileWebOutline.svg';

export function FileWebOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FileWebOutline">
      <SVG />
    </Icon>
  );
}
