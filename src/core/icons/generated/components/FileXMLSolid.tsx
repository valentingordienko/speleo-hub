import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileXMLSolid.svg';

export function FileXMLSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FileXMLSolid">
      <SVG />
    </Icon>
  );
}
