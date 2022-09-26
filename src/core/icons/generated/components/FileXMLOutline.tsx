import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileXMLOutline.svg';

export function FileXMLOutline(props: TProps) {
  return (
    <Icon {...props} name="FileXMLOutline">
      <SVG />
    </Icon>
  );
}
