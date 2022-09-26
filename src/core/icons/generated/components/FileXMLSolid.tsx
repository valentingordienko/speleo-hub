import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileXMLSolid.svg';

export function FileXMLSolid(props: TProps) {
  return (
    <Icon {...props} name="FileXMLSolid">
      <SVG />
    </Icon>
  );
}
