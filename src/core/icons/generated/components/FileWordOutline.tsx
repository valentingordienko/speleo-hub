import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileWordOutline.svg';

export function FileWordOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FileWordOutline">
      <SVG />
    </Icon>
  );
}
