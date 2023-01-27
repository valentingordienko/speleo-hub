import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileJpgOutline.svg';

export function FileJpgOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FileJpgOutline">
      <SVG />
    </Icon>
  );
}
