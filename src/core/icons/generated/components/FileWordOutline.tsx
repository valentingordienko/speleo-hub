import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileWordOutline.svg';

export function FileWordOutline(props: TProps) {
  return (
    <Icon {...props} name="FileWordOutline">
      <SVG />
    </Icon>
  );
}
