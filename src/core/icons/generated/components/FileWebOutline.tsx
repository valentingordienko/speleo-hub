import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileWebOutline.svg';

export function FileWebOutline(props: TProps) {
  return (
    <Icon {...props} name="FileWebOutline">
      <SVG />
    </Icon>
  );
}
