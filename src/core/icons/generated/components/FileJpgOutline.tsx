import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileJpgOutline.svg';

export function FileJpgOutline(props: TProps) {
  return (
    <Icon {...props} name="FileJpgOutline">
      <SVG />
    </Icon>
  );
}
